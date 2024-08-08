import * as React from "react";
import {
  ColumnFiltersState,
  PaginationState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { DataTableToolbar } from "./data-table-toolbar";
import DataTablePagination from "./data-table-pagination";
import { create } from "zustand";
import { useEffect } from "react";
import {
  FilterParams,
  QueryParamsList,
  SortParams,
} from "@/models/queryModels/query-params-list";
import { ComparisonOperators } from "@/models/queryModels/operators";
import DataTableFilterInput from "./data-table-filter-input";
import {
  ColumnsDefFactory,
  DataState,
  DataTableAsyncProps,
  prepareColumns,
} from "./data-table-interfaces";

// Zustand store
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useStore = create<DataState<any>>((set) => ({
  data: [],
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  setData: (data) => set({ data }),
}));

export default function DataTableAsync<TData>({
  columns,
  queryData,
  toolbarButtons,
}: DataTableAsyncProps<TData>) {
  const [rowSelection, setRowSelection] = React.useState({});
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  );
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [canFilter, setCanFilter] = React.useState(true);
  const columnsDataTable = prepareColumns(columns, canFilter);

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { data, setData }: DataState<TData> = useStore();
  const [rowCount, setRowCount] = React.useState<number>(data.length);

  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const getData = async () => {
    try {
      const filter = columnFilters.map((y) => {
        const column = columnsDataTable.find((x) => x.id == y.id);
        if (column != undefined && column != null) {
          const newFilter = {
            propertyName: column.accessorKey,
            value: y.value,
            typeOfSearch: column.comparisonFilter ?? ComparisonOperators.Equals,
          } as FilterParams;
          return newFilter;
        }
      }) as FilterParams[];

      const sort = sorting.map((y) => {
        const column = columnsDataTable.find((x) => x.id == y.id);
        if (column != undefined && column != null) {
          const newSort = {
            propertyName: column.accessorKey,
            order: y.desc ? "DESC" : "ASC",
          } as SortParams;
          return newSort;
        }
      }) as SortParams[];

      const queryParams = {
        filter,
        sort,
        pagination: {
          pageIndex: pagination.pageIndex + 1,
          pageSize: pagination.pageSize,
        },
      } as QueryParamsList;
      const response = await queryData(queryParams);
      setData(response.data);
      setRowCount(response.paginationData?.totalCount ?? response.data.length);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    getData();
  }, [sorting, pagination, columnFilters]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    getData();
  }, []);

  const table = useReactTable({
    data,
    columns: ColumnsDefFactory(columnsDataTable),
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
      pagination,
    },
    rowCount,
    enableRowSelection: true,
    manualFiltering: true,
    manualPagination: true,
    onColumnFiltersChange: setColumnFilters,
    onPaginationChange: setPagination,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  });

  return (
    <div className="space-y-4">
      <DataTableToolbar
        table={table}
        columns={columnsDataTable}
        canFilter={canFilter}
        setCanFilter={setCanFilter}
        toolbarButtons={toolbarButtons}
      />
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} colSpan={header.colSpan}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                      <DataTableFilterInput
                        column={header.column}
                        columnsDef={columnsDataTable}
                      />
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columnsDataTable.length}
                  className="h-24 text-center"
                >
                  No se han encontrado resultados.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <DataTablePagination table={table} />
    </div>
  );
}
