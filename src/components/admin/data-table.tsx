"use client"

import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  // getFilteredRowModel,
  // getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import DeleteProduct from "./delete-product"
import AddProductForm from "./admin-form"
import { ProductWithVariants } from "@/types/validations"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import {useState} from "react"
import { useDebounce } from 'react-use';
// import DeleteBtn from "@/components/adminPage/delete-btn"
// import AddEditProductBtn from "@/components/adminPage/add-product-btn"



export const columns: ColumnDef<ProductWithVariants>[] = [
  {
    id: "select",
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "title",
    header: "Name",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("title")}</div>
    ),
  },
  {
    accessorKey: "slug",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Slug
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("slug")}</div>,
  },
  //   {
  //     accessorKey: "prices",
  //     header: () => <div className="text-right">Amount</div>,
  //     cell: ({ row }) => {

  //       const amount = parseFloat(row.getValue("prices"))

  //       // Format the amount as a dollar amount
  //       const formatted = new Intl.NumberFormat("en-US", {
  //         style: "currency",
  //         currency: "USD",
  //       }).format(amount)

  //       return <div className="text-right font-medium">{formatted}</div>
  //     },
  //   },
  {
    id: "actions",
    enableHiding: false,
    cell: (data) => {
      // console.log(data)
      // console.log(data.row.original.id)
      // const payment = data.row.original
      // const productId = Number(row.getValue("id"))

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="space-y-2">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            {/* <DropdownMenuItem> */}
            <DeleteProduct id={data.row.original.id} />
            {/* </DropdownMenuItem> */}
            {/* <DropdownMenuSeparator /> */}
            {/* <DropdownMenuItem> */}
            <AddProductForm actionType="edit" data={data.row.original} />
            {/* </DropdownMenuItem> */}
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]


type DataTableProps = {
  columns: ColumnDef<ProductWithVariants>[],
  data: ProductWithVariants[],
  canNextPage: boolean,
  canPrevPage: boolean,
  pageNumber: number,
  totalPages: number,
}



export function DataTable({ columns, data, canNextPage, canPrevPage, pageNumber, totalPages }: DataTableProps) {
  // server side search
  const router = useRouter();
const searchParams = useSearchParams();
const [searchValue, setSearchValue] = useState(searchParams.get('title') || '');
const [isLoading, setIsLoading] = useState(false)

useDebounce(
  () => {
    setIsLoading(true)
    const params = new URLSearchParams(searchParams.toString());
    
    if (searchValue) {
      params.set('title', searchValue);
      // Reset to first page when searching
      params.set('page', '1');
    } else {
      params.delete('title');
    }
    
    router.push(`?${params.toString()}`);
    setIsLoading(false)
  },
  500,
  [searchValue]
);
  
  
  // console.log(products);
  // TODO - dynamic data is not displaying in the table

  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    // getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    // getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <div className="w-full ">
      <div className="flex items-center py-4">
        <Input
          placeholder="Search products..."
          value={searchValue}
          onChange={(event) =>
            setSearchValue(event.target.value)
          }
          className="max-w-sm bg-brand-bg-DEFALUT focus-visible:ring-0"
        />
        {isLoading && <span className="ml-2">Searching.....</span>}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto bg-brand-bg-DEFALUT">
              Columns <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                    </TableHead>
                  )
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
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          Page {" "}
          {pageNumber} of{" "}
          {totalPages}.
        </div>
        <div className="space-x-2">
          {canPrevPage && (
            <Link href={`/admin/products?page=${pageNumber - 1}`}>
              <Button
                variant="outline"
                size="sm"
                // onClick={() => table.previousPage()}
                disabled={!canPrevPage}

              >
                Previous
              </Button>
            </Link>
          
          )}

          {canNextPage && (
            <Link href={`/admin/products?page=${pageNumber + 1}`}>
              <Button
                variant="outline"
                size="sm"
                // onClick={() => table.nextPage()}
                disabled={!canNextPage}
              >
                Next
              </Button>
            </Link>

          )}
        </div>
      </div>
    </div>
  )
}