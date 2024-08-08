import { Column } from "@tanstack/react-table";
import { Input } from "../ui/input";
import { ColumnBasic } from "./data-table-interfaces";
import { DataTableFacetedFilter } from "./data-table-faceted-filter";

interface DataTableFilterInputProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>;
  columnsDef: ColumnBasic<TData>[];
}

const DataTableFilterInput = <TData, TValue>({
  column,
  columnsDef,
}: DataTableFilterInputProps<TData, TValue>) => {
  const columnDef = columnsDef.find((x) => x.id == column.id);
  if (
    columnDef == undefined ||
    columnDef == null ||
    columnDef?.enableFiltering != true
  ) {
    return <></>;
  }
  const value = column.getFilterValue() ?? "";
  return (
    <div className="mb-1 mt-0.5 flex justify-center">
      {columnDef.type == "enum" ? (
        <>
          <DataTableFacetedFilter
            key={`${columnDef.accessorKey}-${columnDef.headerTitle}`}
            column={column}
            title="Selección"
            options={columnDef.facetedFilters!.options}
          />
        </>
      ) : (
        <Input
          type={columnDef.type}
          placeholder={
            columnDef.filterTitle ?? `Buscar ${columnDef.headerTitle}...`
          }
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
          value={value as any}
          onChange={(event) => column.setFilterValue(event.target.value)}
          className="h-7 w-full max-w-xs p-1 text-sm shadow-sm dark:invert"
        />
      )}
    </div>
  );
};

export default DataTableFilterInput;
