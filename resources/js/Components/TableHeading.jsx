import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/16/solid"; // the 16 is the size of the icons


export default function TableHeading({
    name,
    sortable = true,
    sort_field = null,
    sort_direction = null,
    sortChanged = () => {}, // recieve a function with this empty function
    children, // Children lets you manipulate and transform the JSX you received as the children prop.
}) { 
    
     //console.log([name, sortable, sort_field, sort_direction])

    return (
        <th onClick={(e) => sortChanged(name)}>
            <div className="px-3 py-3 flex items-center gap-1 cursor-pointer">
                {children} 
                {sortable && (
                <div>
                    <ChevronUpIcon
                    className={
                        "w-4 " +
                        (sort_field === name && sort_direction === "asc"
                        ? "text-red-600"
                        : "")
                    }
                    />
                    <ChevronDownIcon
                    className={
                        "w-4 -mt-2 " +
                        (sort_field === name && sort_direction === "desc"
                        ? "text-red-600"
                        : "")
                    }
                    />
                </div>
                )}
            </div>
        </th>
    );
}
