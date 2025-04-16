import { customers } from "@/app/lib/placeholder-data";
import CustomersTable from "../../customers/table";

export default function Page() {
  return (
    <>
      <CustomersTable customers={customers} />
    </>
  );
}
