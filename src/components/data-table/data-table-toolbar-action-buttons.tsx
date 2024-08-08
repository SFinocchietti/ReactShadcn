import React from "react";
import { Button } from "../ui/button";
import { Table } from "@tanstack/react-table";
import { UseNavigateResult, useNavigate } from "@tanstack/react-router";

export interface ToolbarActionButtonProps<TData> {
  title: string;
  action: (params: {
    table: Table<TData>;
    navigate: UseNavigateResult<string>;
  }) => void;
  icon?: React.ComponentType<{ className?: string }>;
  renderAction?: () => boolean;
}

export const ToolbarActionButton = <TData,>({
  title,
  icon: Icon,
  action,
  renderAction,
  table,
}: ToolbarActionButtonProps<TData> & { table: Table<TData> }) => {
  const navigate = useNavigate();
  if (renderAction && !renderAction()) {
    return <></>;
  } else {
    return (
      <Button
        variant="default"
        size="sm"
        className="hidden h-7 gap-1 lg:flex"
        onClick={() => action({ table, navigate })}
      >
        {Icon && <Icon className="size-3.5" />}
        <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
          {title}
        </span>
      </Button>
    );
  }
};
