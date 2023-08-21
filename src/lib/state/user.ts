import { useReducer } from "react";

export interface IUser {
  isLoading: boolean;
  isError: boolean;
  error: null | string;
  user: {
    firstName: string;
    lastName: string;
    phone: string | null;
    email: string;
    acceptsMarketing: boolean;
  };
}

const initialState: IUser = {
  isLoading: false,
  isError: false,
  error: null,
  user: {
    firstName: "",
    lastName: "",
    phone: null,
    email: "",
    acceptsMarketing: false,
  },
};

function reducer(
  state: IUser,
  action: { type: string; payload: Partial<IUser> },
): IUser {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        error: null,
        isError: false,
        isLoading: true,
      };
    case "success":
      return {
        ...state,
        isLoading: false,
        isError: false,
        error: null,
        user: { ...(action.payload as IUser["user"]) },
      };
    case "error": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: action.payload as string,
      };
    }
    default:
      return state;
  }
}

export const useUserSlice = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return { state, dispatch };
};
