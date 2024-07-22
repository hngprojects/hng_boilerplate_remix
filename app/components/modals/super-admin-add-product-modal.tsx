import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";

const isServer = typeof window === "undefined";

const formSchema = z.object({
  name: z.string().min(1, { message: "Product name is required" }),
  description: z
    .string()
    .min(1, { message: "Product description is required" }),
  price: z.coerce
    .number({ message: "Price must be a number" })
    .gt(0, { message: "Price must be greater than zero." }),
  quantity: z.coerce
    .number({ message: "Quantity must be a number" })
    .gt(0, { message: "Quantity must be greater than zero" }),
  images: isServer
    ? z.unknown()
    : z
        .instanceof(FileList, { message: "Image is required" })
        .refine((images) => images?.length >= 1, {
          message: "Image is required",
        }),
});

type FormSchema = z.infer<typeof formSchema>;
type FormData = Omit<z.infer<typeof formSchema>, "images"> & {
  images: File[];
};

interface Properties {
  /*
   * Control the modal's open state
   */
  isModalOpen: boolean;

  /*
   * Function is called when the modal open state needs to change.
   * @param isOpen: The new modal open state to change to.
   */
  onModalOpenChange: (isOpen: boolean) => void;

  /*
   * Button which is displayed to open the modal
   */
  triggerButton: React.ReactNode;

  /*
   * Called when the form is submitted with the form values
   * @param data: Form data when submitted
   */
  onSubmit: (data: FormData) => void;
}
export default function SuperAdminAddProductModal({
  triggerButton,
  onSubmit,
  isModalOpen,
  onModalOpenChange,
}: Properties) {
  const {
    reset,
    formState: { errors, isSubmitSuccessful },
    register,
    handleSubmit,
    watch,
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", description: "" },
  });

  const images = watch("images", []) as Iterable<File>;
  const previewImages = useMemo(
    () =>
      [...images].map((file) => ({
        url: URL.createObjectURL(file),
        name: file.name,
      })),
    [images],
  );

  useEffect(() => {
    return () => {
      // revoke object urls to prevent memory leaks
      for (const { url } of previewImages) {
        URL.revokeObjectURL(url);
      }
    };
  }, [previewImages]);

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const _onSubmit = (values: FormSchema) => {
    const images = [...(values.images as Iterable<File>)];
    onSubmit({ ...values, images });
  };

  const onDialogOpenChange = (isOpen: boolean) => {
    // Reset form when dialog is closed
    if (!isOpen) {
      reset();
    }

    onModalOpenChange(isOpen);
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={onDialogOpenChange}>
      <DialogTrigger asChild>{triggerButton}</DialogTrigger>

      <DialogContent className="max-h-[95vh] max-w-[80vw] gap-[23px] overflow-auto rounded-md px-5 py-6 sm:px-[41px] sm:py-[43px] md:max-w-[657px]">
        <DialogHeader className="space-y-[3px]">
          <DialogTitle className="text-lg font-bold leading-[normal]">
            Add new product
          </DialogTitle>
          <DialogDescription className="text-xs leading-[normal] text-slate-500">
            Create a new product
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(_onSubmit)} className="space-y-[23px]">
          <div className="space-y-[15px]">
            <div className="space-y-1.5">
              <Label htmlFor="product-name">Product name</Label>
              <Input
                {...register("name")}
                id="product-name"
                autoComplete="product-name"
                className="focus-visible:ring-[#F97316]"
                placeholder="e.g John Doe"
              />
              {errors.name && (
                <small className="text-destructive">
                  {errors.name.message}
                </small>
              )}
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="product-description">Product Description</Label>
              <Textarea
                {...register("description")}
                placeholder="add product description"
                className="h-[107px] resize-none focus-visible:ring-[#F97316]"
                id="product-description"
                autoComplete="product-description"
              />
              {errors.description && (
                <small className="text-destructive">
                  {errors.description.message}
                </small>
              )}
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="product-price">Price</Label>
              <Input
                {...register("price")}
                id="product-price"
                autoComplete="product-price"
                className="focus-visible:ring-[#F97316]"
                placeholder="e.g 2000.00"
                type="number"
              />
              {errors.price && (
                <small className="text-destructive">
                  {errors.price.message}
                </small>
              )}
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="product-quantity">Quantity</Label>
              <Input
                {...register("quantity")}
                id="product-quantity"
                autoComplete="product-quantity"
                className="focus-visible:ring-[#F97316]"
                placeholder="e.g 1000"
                type="number"
              />
              {errors.quantity && (
                <small className="text-destructive">
                  {errors.quantity.message}
                </small>
              )}
            </div>
            <div className="space-y-[15px]">
              <Label htmlFor="product-quantity">Upload Images</Label>
              <Input
                type="file"
                accept="image/*"
                className="focus-visible:ring-[#F97316]"
                multiple
                {...register("images")}
              />

              {errors.images && typeof errors.images.message === "string" && (
                <small className="!mt-1.5 text-destructive">
                  {errors.images.message}
                </small>
              )}
            </div>
            {previewImages.length > 0 && (
              <ul className="flex gap-[15px] overflow-auto">
                {previewImages.map(({ url, name }) => (
                  <li key={url} className="shrink-0">
                    <img
                      src={url}
                      alt={name}
                      className="aspect-square w-[86px] rounded-sm bg-zinc-50 object-cover"
                    />
                  </li>
                ))}
              </ul>
            )}
          </div>

          <DialogFooter>
            <Button type="submit">Add Product</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
