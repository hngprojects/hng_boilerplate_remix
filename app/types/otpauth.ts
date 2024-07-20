export type Input = {
  name: string;
  value: string;
};

export type OtpAuthProps = {
  setIsModalOpen?: (isOpen: boolean) => void;
  handleSubmit?: (values: Input[]) => void;
  isModalOpen?: boolean;
  inputs?: Input[];
};
