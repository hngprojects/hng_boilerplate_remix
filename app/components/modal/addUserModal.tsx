import { ChangeEvent, FormEvent, useState } from "react";

interface AddUserContentProperties {
  toggleShow: (show: boolean) => void;
}

const AddUserContent: React.FC<AddUserContentProperties> = ({ toggleShow }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    if (id === "name") setName(value);
    if (id === "email") setEmail(value);
    if (id === "phoneNumber") setPhoneNumber(value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const newErrors = {
      name: "",
      email: "",
      phoneNumber: "",
    };

    if (!name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email address is invalid";
    }
    if (!phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    }
    if (newErrors.name || newErrors.email || newErrors.phoneNumber) {
      setErrors(newErrors);
    } else {
      setName("");
      setEmail("");
      setPhoneNumber("");
      setErrors({
        name: "",
        email: "",
        phoneNumber: "",
      });
      toggleShow(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-xl">Add new user</h2>
      <p className="text-loading-hover">Create a new user</p>
      <div className="flex">
        <div className="my-5 h-20 w-20 rounded-full bg-[hsl(0,0%,85%)]">
          <input
            type="file"
            alt=""
            className="h-20 w-20 rounded-full bg-[#D9D9D9] opacity-0"
          />
        </div>
        <div className="mx-4 my-auto">
          <p>Upload Picture</p>
          <div className="relative">
            <p className="absolute text-primary">Click to upload</p>
            <input type="file" className="w-28 opacity-0" />
          </div>
        </div>
      </div>
      <div>
        <div className="my-2 flex flex-col">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleChange}
            placeholder="e.g John Doe"
            className="my-2 rounded-lg border-2 p-2 outline-[#CBD5E1] focus:border-none"
          />
          {errors.name && <p className="text-error">{errors.name}</p>}
        </div>
        <div className="my-2 flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleChange}
            placeholder="e.g johndoe@gmail.com"
            className="my-2 rounded-lg border-2 p-2 outline-[#CBD5E1] focus:border-none"
          />
          {errors.email && <p className="text-error">{errors.email}</p>}
        </div>
        <div className="my-2 flex flex-col">
          <label htmlFor="phoneNumber">Phone number</label>
          <input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={handleChange}
            placeholder="e.g 08123456789"
            className="my-2 rounded-lg border-2 p-2 outline-[#CBD5E1] focus:border-none"
          />
          {errors.phoneNumber && (
            <p className="text-error">{errors.phoneNumber}</p>
          )}
        </div>
      </div>
      <div className="flex justify-end">
        <button type="submit" className="rounded-lg bg-primary p-3 text-white">
          Add New User
        </button>
      </div>
    </form>
  );
};

export default AddUserContent;
