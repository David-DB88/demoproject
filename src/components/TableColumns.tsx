import {MUIDataTableColumn} from "mui-datatables";
import FormDialog from './AddEditContacts/AddEditContact'
import AlertDialog from "./DeleteContact/DeleteContact";

const columns: MUIDataTableColumn[] = [
    {
        name: "id",
        label: "ID",
        options: {
            sort: true,
            sortThirdClickReset: true
        }
    },
    {
        name: "name",
        label: "Name",
        options: {
            sort: true,
            sortThirdClickReset: true
        }
    },
    {
        name: "email",
        label: "Email",
        options: {
            sort: true,
            sortThirdClickReset: true
        }
    },
    {
        name: "phone",
        label: "Phone",
        options: {
            sort: true,
            print: false,
            sortThirdClickReset: true
        }
    },
    {
        name: "action",
        label: "Action",
        options: {
            sort: false,
            print: false,
            customBodyRender: (value: any, meta ) => {
                return (<div style={{display: 'flex'}}>
                    <FormDialog currentItem={meta?.rowData}  editMode={true} />
                    <AlertDialog currentItem={meta?.rowData}/>
                </div>
            )

            }
        }
    },
]

export default columns;
