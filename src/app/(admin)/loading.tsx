import { Skeleton } from "@/components/ui/skeleton"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function AdminProductList() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="flex mb-4 text-sm" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2">
          <li><Skeleton className="h-4 w-16" /></li>
          <li className="flex items-center">
            <span className="mx-2">&gt;</span>
            <Skeleton className="h-4 w-20" />
          </li>
        </ol>
      </nav>

      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-6">All Products</h1>

      {/* Product Table */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[300px]">Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Category</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[...Array(8)].map((_, i) => (
            <TableRow key={i}>
              <TableCell><Skeleton className="h-5 w-[250px]" /></TableCell>
              <TableCell><Skeleton className="h-5 w-16" /></TableCell>
              <TableCell><Skeleton className="h-5 w-[200px]" /></TableCell>
              <TableCell className="text-right">
                <Button variant="ghost" size="icon" disabled>
                  <span className="sr-only">Actions</span>
                  <Skeleton className="h-5 w-5 rounded-full" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <Skeleton className="h-9 w-24" /> {/* Items per page */}
        <div className="flex space-x-2">
          <Skeleton className="h-9 w-9" /> {/* Previous page */}
          <Skeleton className="h-9 w-9" />
          <Skeleton className="h-9 w-9" />
          <Skeleton className="h-9 w-9" />
          <Skeleton className="h-9 w-9" /> {/* Next page */}
        </div>
      </div>
    </div>
  )
}