import { Button } from "../ui/button";

interface DeleteUserContentProperties {
  toggleShow: (show: boolean) => void;
}

const DeleteUserContent: React.FC<DeleteUserContentProperties> = ({
  toggleShow,
}) => {
  return (
    <div className="">
      <h1 className="text-xl font-semibold">
        {" "}
        Are you sure you want to delete?{" "}
      </h1>
      <p className="py-2 text-[#64748B]">
        {" "}
        This action cannot be undone. This will permanently delete this user
        from the database.{" "}
      </p>
      <div className="mt-2 flex justify-end">
        <Button
          className="m-2 border bg-background text-neutral-2 hover:bg-background"
          onClick={() => toggleShow(false)}
        >
          Cancel
        </Button>
        <Button
          className="bg-error hover:bg-error m-2"
          onClick={() => toggleShow(false)}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default DeleteUserContent;
