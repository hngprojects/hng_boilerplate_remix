import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
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
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";

const isServer = typeof window === "undefined";

const formSchema = z.object({
  name: z.string().min(1, { message: "Product name is required" }),
  description: z.string().min(1, { message: "Product description is required" }),
  price: z.coerce
    .number({ message: "Price must be a number" })
    .gt(0, { message: "Price must be greater than zero." }),
  quantity: z.coerce
    .number({ message: "Quantity must be a number" })
    .gt(0, { message: "Quantity must be greater than zero" }),
  images: isServer
    ? z.any()
    : z
        .instanceof(FileList, { message: "Image is required" })
        .refine((images) => images?.length >= 1, { message: "Image is required" }),
});

type FormSchema = z.infer<typeof formSchema>;

interface PreviewImage {
  url: string;
  name: string;
}

interface Props {
  triggerButton: React.ReactNode;
  onSubmit: (data: FormSchema) => void;
}
export default function AddProductModal({ triggerButton, onSubmit }: Props) {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", description: "" },
  });

  const [previewImages, setPreviewImages] = useState<PreviewImage[]>([]);

  const imagesRef = form.register("images");

  const resetForm = () => {
    form.reset();
    setPreviewImages([]);
  };

  const _onSubmit = (values: FormSchema) => {
    onSubmit(values);
    resetForm();
  };

  const onDialogOpenChange = (open: boolean) => {
    // Reset form when dialog is closed

    if (open) return;
    resetForm();
  };

  return (
    <Dialog onOpenChange={onDialogOpenChange}>
      <DialogTrigger asChild>{triggerButton}</DialogTrigger>

      <DialogContent className="max-w-[80vw] md:max-w-[657px] max-h-[95vh] overflow-auto space-y-[23px] px-5 py-6 sm:px-[41px] sm:py-[43px] rounded-md">
        <DialogHeader className="space-y-[3px]">
          <DialogTitle className="text-lg font-bold leading-[normal]">Add new product</DialogTitle>
          <DialogDescription className="text-xs text-slate-500 leading-[normal]">
            Create a new product
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(_onSubmit)} className="space-y-[15px]">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="e.g John Doe" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Decription</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder="add product description"
                      className="h-[107px] resize-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="e.g 2000.00" type="number" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="quantity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quantity</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="e.g 1000" type="number" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="images"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Upload Images</FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      accept="image/*"
                      multiple
                      {...imagesRef}
                      onChange={(event) => {
                        const files = [...(event.target?.files || [])];
                        field.onChange(files);

                        const previewImages = files.map((file) => ({
                          url: URL.createObjectURL(file),
                          name: file.name,
                        }));
                        setPreviewImages(previewImages);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {previewImages.length > 0 && (
              <ul className="flex gap-[15px] overflow-auto">
                {previewImages.map(({ url, name }) => (
                  <li key={url}>
                    <img
                      src={url}
                      alt={name}
                      className="w-[86px] aspect-square rounded-sm object-cover bg-zinc-50"
                    />
                  </li>
                ))}
              </ul>
            )}

            <DialogFooter>
              <Button type="submit">Add Product</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
