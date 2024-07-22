import { useState } from "react";
import { useForm } from "react-hook-form";

import Buttons from "./Buttons";
import Dropdown from "./Dropdown";
import Input from "./Input";
import Links from "./Links";
import TextArea from "./TextArea";

interface Properties {
  image: string;
}

interface Inputs {
  email: string;
  jobTitle: string;
  bio: string;
  username: string;
  team: string;
  pronoun: string;
  [key: string]: string;
}

function Form({ image }: Properties) {
  const [username, setUsername] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [email, setEmail] = useState("");
  const [team, setTeam] = useState("");
  const [bio, setBio] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<Inputs>();

  function onSubmit(data: object) {
    // data to b
    return { ...data, image };
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col justify-start gap-6 self-start bg-background text-foreground"
    >
      <div className="flex w-full flex-row items-start justify-between gap-4">
        <Input
          name="username"
          label="username"
          type="text"
          placeholder="Enter username"
          value={username}
          setValue={setUsername}
          error={errors?.username?.message}
          register={{
            ...register("username", {
              required: "A username is required",
            }),
          }}
        />

        <Dropdown control={control} />
      </div>

      <div className="flex w-full flex-row items-start justify-between gap-4">
        <Input
          name="job-title"
          label="your job title"
          type="text"
          placeholder="Enter job title"
          value={jobTitle}
          setValue={setJobTitle}
          error={errors?.jobTitle?.message}
          register={{
            ...register("jobTitle", {
              required: "Job title field is required",
            }),
          }}
        />
        <Input
          name="team"
          label="department or team"
          type="text"
          placeholder="Enter department or team"
          value={team}
          setValue={setTeam}
          error={errors?.team?.message}
          register={{
            ...register("team", {
              required: "Team field is required",
            }),
          }}
        />
      </div>

      <Input
        name="email"
        label="your email address"
        type="text"
        placeholder="Enter email address"
        value={email}
        setValue={setEmail}
        error={errors?.email?.message}
        register={{
          ...register("email", {
            required: "Email field is required",
            pattern: {
              value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message: "Invalid email address",
            },
          }),
        }}
      />

      <TextArea
        name="bio"
        placeholder="Type your message here"
        value={bio}
        setValue={setBio}
        error={errors?.bio?.message}
        register={{
          ...register("bio", {
            required: "A bio is required",
            maxLength: {
              value: 64,
              message: "Bio cannot exceed 64 characters",
            },
          }),
        }}
      />
      <Links register={register} />

      <Buttons reset={reset} />
    </form>
  );
}

export default Form;
