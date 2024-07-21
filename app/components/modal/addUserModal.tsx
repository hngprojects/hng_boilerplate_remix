import { useState, ChangeEvent, FormEvent } from "react";

interface AddUserContentProps {
  toggleShow: (show: boolean) => void;
}

const AddUserContent: React.FC<AddUserContentProps> = ({ toggleShow }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phoneNumber: ""
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    if (id === "name") setName(value);
    if (id === "email") setEmail(value);
    if (id === "phoneNumber") setPhoneNumber(value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newErrors = {
      name: "",
      email: "",
      phoneNumber: ""
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
        phoneNumber: ""
      });
      toggleShow(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-xl">Add new user</h2>
      <p className="text-[#64748B]">Create a new user</p>
      <div className="flex">
        <div className="h-20 w-20 rounded-full bg-[#D9D9D9] my-5">
          <input
            type="file"
            alt=""
            className="h-20 w-20 rounded-full bg-[#D9D9D9] opacity-0"
          />
        </div>
        <div className="my-auto mx-4">
          <p>Upload Picture</p>
          <div className="relative">
            <p className="absolute text-[#F97316]">Click to upload</p>
            <input type="file" className="opacity-0 w-28" />
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col my-2">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleChange}
            placeholder="e.g John Doe"
            className="border-2 rounded-lg p-2 focus:border-none outline-[#CBD5E1] my-2"
          />
          {errors.name && <p className="text-red-600">{errors.name}</p>}
        </div>
        <div className="flex flex-col my-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleChange}
            placeholder="e.g johndoe@gmail.com"
            className="border-2 rounded-lg p-2 focus:border-none outline-[#CBD5E1] my-2"
          />
          {errors.email && <p className="text-red-600">{errors.email}</p>}
        </div>
        <div className="flex flex-col my-2">
          <label htmlFor="phoneNumber">Phone number</label>
          <input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={handleChange}
            placeholder="e.g 08123456789"
            className="border-2 rounded-lg p-2 focus:border-none outline-[#CBD5E1] my-2"
          />
          {errors.phoneNumber && <p className="text-red-600">{errors.phoneNumber}</p>}
        </div>
      </div>
      <div className="flex justify-end">
        <button type="submit" className="bg-[#F97316] p-3 rounded-lg text-white">
          Add New User
        </button>
      </div>
    </form>
  );
};

export default AddUserContent;
 
  