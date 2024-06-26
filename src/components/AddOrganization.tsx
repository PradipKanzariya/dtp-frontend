import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "cmdk";
import { Check, ChevronsUpDown } from "lucide-react";
import { useState } from 'react';
import { Input } from "./ui/input";


const frameworks = [
    {
        id: 1,
        value: "next.js",
        label: "Next.js",
    },
    {
        id: 2,
        value: "sveltekit",
        label: "SvelteKit",
    },
    {
        id: 3,
        value: "nuxt.js",
        label: "Nuxt.js",
    },
    {
        id: 4,
        value: "remix",
        label: "Remix",
    },
    {
        id: 5,
        value: "astro",
        label: "Astro",
    },
];

function AddOrganization({ buttonName }:{buttonName: string}) {
    const [open3, setOpen3] = useState(false);
    const [value3, setValue3] = useState("");

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 rounded px-5">{buttonName}</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[800px] bg-white">
                <DialogHeader>
                    <DialogTitle>Add Organization Details</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-1">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Organization Name
                        </Label>
                        <Input type="name" placeholder="Enter Organization Name" className="w-[500px]" />
                    </div>
                </div>
                <div className="grid gap-4 py-1">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Organization Type
                        </Label>
                        <Popover open={open3} onOpenChange={setOpen3}>
                            <PopoverTrigger asChild>
                                <Button
                                    variant="outline"
                                    role="combobox"
                                    aria-expanded={open3}
                                    className="w-[500px] justify-between"
                                >
                                    {value3
                                        ? frameworks.find((framework) => framework.value === value3)?.label
                                        : "Select"}
                                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-[500px] p-0 bg-slate-200">
                                <Command>
                                    <CommandInput placeholder="Search..." className="w-[500px]" />
                                    <CommandEmpty>No data found.</CommandEmpty>
                                    <CommandGroup>
                                        {frameworks.map((framework) => (
                                            <CommandList key={framework.id}>
                                                <CommandItem
                                                    key={framework.id}
                                                    value={framework.value}
                                                    onSelect={(currentValue) => {
                                                        setValue3(currentValue === value3 ? "" : currentValue)
                                                        setOpen3(false)
                                                    }}
                                                >
                                                    <Check
                                                        className={cn(
                                                            "mr-2 h-4 w-4",
                                                            value3 === framework.value ? "opacity-100" : "opacity-0"
                                                        )}
                                                    />
                                                    {framework.label}
                                                </CommandItem>
                                            </CommandList>
                                        ))}
                                    </CommandGroup>
                                </Command>
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit" variant="outline" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 rounded px-5">Upload</Button>
                    <Button type="button" variant="outline" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 rounded px-5">Cancel</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export default AddOrganization;
