import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import CardWrapper from "@/components/auth/card-wrapper";

const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel="Oops! Something went wrong!"
      backButtonHref="/auth/login"
      backbuttonLabel="Back to login"
    >
      <div className="flex justify-center w-full items-center">
        <ExclamationTriangleIcon className="text-destructive" />
      </div>
    </CardWrapper>
  );
};

export default ErrorCard;
