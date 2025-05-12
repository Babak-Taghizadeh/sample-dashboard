import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const EarningsPagination = () => {
  return (
    <div className="mt-4 flex flex-col items-center justify-center gap-4 md:flex-row">
      <Select defaultValue="10 Transaction">
        <SelectTrigger className="w-[160px]">
          <SelectValue placeholder="Transaction Count" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="10 Transaction">10 Transaction</SelectItem>
            <SelectItem value="20 Transaction">20 Transaction</SelectItem>
            <SelectItem value="30 Transaction">30 Transaction</SelectItem>
            <SelectItem value="50 Transaction">50 Transaction</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationLink isActive href="#">
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">7</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">8</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">9</PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
      <div className="flex list-none items-center gap-2">
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </div>
    </div>
  );
};

export default EarningsPagination;
