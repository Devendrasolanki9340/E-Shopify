

import { Dialog, DialogContent, DialogHeader,DialogTitle } from "@/components/ui/dialog";
import type { Category } from "@/features/admin/products/types";






const dialogContentClass = "sm:max-w-xl";

const contentWrap = "space-y-4";

const formRow = "flex gap-3";

const categoriesList = "space-y-2";

const categoryRow =
  "flex items-center justify-between rounded-xl border border-border bg-card px-3 py-3";

const categoryInfo = "flex items-center gap-2";

const categoryIcon = "h-4 w-4 text-muted-foreground";

const categoryName = "text-sm font-medium text-foreground";

const emptyStateClass =
  "rounded-xl border border-dashed border-border p-6 text-center text-sm text-muted-foreground";

const editButtonClass = "h-4 w-4";

type CategoryDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  categories: Category[];
  onSaved: () => Promise<void>;
};


export function CategoryDialog({
    open,
  onOpenChange,
  categories,
  onSaved,
}: CategoryDialogProps){

    return <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className={dialogContentClass}>
            <DialogHeader>
                <DialogTitle>Manage Catgories</DialogTitle>
            </DialogHeader>
        </DialogContent>

    </Dialog>
}