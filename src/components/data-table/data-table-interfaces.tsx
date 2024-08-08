import { ComparisonOperators } from "@/models/queryModels/operators";
import { xPagination } from "@/models/queryModels/pagination";
import { QueryParamsList } from "@/models/queryModels/query-params-list";
import {
  CellContext,
  ColumnDef,
  HeaderContext,
  Row,
} from "@tanstack/react-table";
import { DataTableFacetedFiltersOptions } from "./data-table-faceted-filter";
import { Checkbox } from "@radix-ui/react-checkbox";
import { DataTableColumnHeader } from "./data-table-column-header";
import { ToolbarActionButtonProps } from "./data-table-toolbar-action-buttons";

export interface DataTableAsyncProps<TData> {
  columns: ColumnBasic<TData>[];
  queryData: (filters?: QueryParamsList) => Promise<{
    data: TData[];
    paginationData: xPagination | null;
  }>;
  toolbarButtons?: ToolbarActionButtonProps<TData>[];
}

export interface DataTablePropsSync<TData> {
  columns: ColumnBasic<TData>[];
  data: TData[];
  toolbarButtons?: ToolbarActionButtonProps<TData>[];
}

export interface ColumnBasic<TData> {
  id?: string;
  accessorKey?: string;
  headerTitle?: string;
  enableSorting?: boolean;
  enableHiding?: boolean;
  enableFiltering?: boolean;
  type?: "text" | "number" | "date" | "enum";
  filterPlaceHolder?: string;
  comparisonFilter?: ComparisonOperators;
  cell?: ({ row }: CellContext<TData, unknown>) => JSX.Element;
  header?: ({ column }: HeaderContext<TData, unknown>) => JSX.Element;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  filterFn?: (row: Row<TData>, id: string, value: any) => any; // ver si eliminar despues
  filterTitle?: string;
  facetedFilters?: {
    options: DataTableFacetedFiltersOptions[];
    title: string;
  };
}

export const prepareColumns = <TData,>(
  columnsDataTable: ColumnBasic<TData>[],
  canFilter: boolean,
) => {
  const newColumns = columnsDataTable.map((x) => ({ ...x }));
  newColumns.map((x) => {
    x.id = x.id ?? x.accessorKey;
    if (x.id == "select" || x.id == "actions") {
      x.enableFiltering = false;
    } else {
      x.enableFiltering = canFilter ? x.enableFiltering ?? true : false;
    }
  });
  return newColumns;
};

export function ColumnsDefFactory<TData, TValue = unknown>(
  columnsData: ColumnBasic<TData>[],
): ColumnDef<TData, TValue>[] {
  const data = columnsData.map((x) => ColumnDefFactory(x));
  return data;
}

export function ColumnDefFactory<TData, TValue = unknown>(
  columnData: ColumnBasic<TData>,
): ColumnDef<TData, TValue> {
  if (columnData.id == "select") {
    return {
      id: "select",
      accessorKey: "id",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
          className="mr-2 translate-y-[2px]"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
          className="translate-y-[2px]"
        />
      ),
      enableSorting: false,
      enableHiding: false,
      enableColumnFilter: false,
    };
  } else if (columnData.id == "actions") {
    return {
      id: "actions",
      cell: columnData.cell,
      enableSorting: false,
      enableHiding: false,
      enableColumnFilter: false,
      header:
        columnData.header ?? columnData.headerTitle
          ? ({ column }) => (
              <DataTableColumnHeader
                column={column}
                title={columnData.headerTitle!}
              />
            )
          : () => <></>,
    };
  }

  return {
    id: columnData.id,
    accessorKey: columnData.accessorKey,
    type: columnData.type,
    header:
      columnData.header ??
      (({ column }) => (
        <DataTableColumnHeader
          column={column}
          title={columnData.headerTitle!}
        />
      )),
    cell:
      columnData.cell ??
      (({ row }) => {
        return (
          <div className="flex space-x-2">
            <span className="max-w-[500px] truncate font-medium">
              {row.getValue(columnData.accessorKey!)}
            </span>
          </div>
        );
      }),
    enableSorting: columnData.enableSorting ?? true,
    enableHiding: columnData.enableHiding ?? true,
    enableFiltering: columnData.enableFiltering ?? true,
    ...(columnData.filterFn && { filterFn: columnData.filterFn }),
  } as ColumnDef<TData, TValue>;
}

// Define state shape
export interface DataState<Tdata> {
  data: Tdata[];
  setData: (data: Tdata[]) => void;
}
