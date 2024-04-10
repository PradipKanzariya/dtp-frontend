import AddLotDialog from "@/components/AddLotDialog";
import ComboInput from "@/components/ComboInput";
import CustomTable from "@/components/CustomTable";
import PageHeader from "@/components/PageHeader";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";


function Dashboard() {

    const tableHeaders = ["PRODUCT", "VENDOR", "AGREEMENTTYPE", "DOCUMENT", ""];
    const tableData = [
        ["Product 1", "pradip", "My order", (
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel><ComboInput buttonName="Upload Bill" title="Upload Bill" label="Bill" submitButton="Submit Bill" /></DropdownMenuLabel>
                    <DropdownMenuLabel><ComboInput buttonName="Upload ProofOfDelivery" title="Upload ProofOfDelivery" label="ProofOfDelivery" submitButton="Submit ProofOfDelivery" /></DropdownMenuLabel>
                    <DropdownMenuLabel><ComboInput buttonName="Upload Invoice" title="Upload Invoice" label="Upload Invoice" submitButton="Submit Invoice" /></DropdownMenuLabel>
                </DropdownMenuContent>
            </DropdownMenu>
        ), (
                <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 rounded px-5">
                    View
                </Button>
            )]
    ];

    return (
        <div>
            <div>
                <PageHeader title="DASHBOARD" />
            </div>
            <div className="flex justify-between items-center mb-4 py-5 px-10">
                <b>Add Lot</b>
                <div>
                    <AddLotDialog buttonName="Add Lot" />
                </div>
            </div>
            <div>
                <CustomTable headers={tableHeaders} data={tableData} />
            </div>
        </div>
    );
}

export default Dashboard;
