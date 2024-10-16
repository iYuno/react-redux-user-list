import { sortByCity, sortByCompany } from "@/entities/user";
import { useAppDispatch } from "@/shared/model/hooks";
import { Button } from "@/shared/ui";

interface SortByButtonProps {
  sortBy: string;
  children: React.ReactNode;
}

function SortByButton({ sortBy, children }: SortByButtonProps) {
  const dispatch = useAppDispatch();

  const sortHandle = () => {
    switch (sortBy) {
      case "city":
        return dispatch(sortByCity());
      case "company":
        return dispatch(sortByCompany());
      default:
        return null;
    }
  };

  return (
    <Button variant="primary" onClick={sortHandle}>
      {children}
    </Button>
  );
}

export { SortByButton };
