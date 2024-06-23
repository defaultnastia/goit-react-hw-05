import toast from "react-hot-toast";

export const keyWordRequired = () => {
  toast("Please enter at least one symbol!", {
    style: {
      border: "1px solid #FE5F55",
      padding: "8px",
      color: "#FE5F55",
    },
    icon: "🎬",
  });
};

export const noMoviesFound = (keyword) => {
  toast(`No movies found for "${keyword}"!`, {
    style: {
      border: "1px solid #FE5F55",
      padding: "8px",
      color: "#FE5F55",
    },
    icon: "🎬",
  });
};

export const oopsToast = (error) => {
  toast(`Oops! Error happened: ${error}`, {
    style: {
      border: "1px solid #FE5F55",
      padding: "8px",
      color: "#FE5F55",
    },
    icon: "🙊",
  });
};

export const sameSearchToast = (keyword) => {
  toast(`Search results for "${keyword}" are already shown!`, {
    style: {
      border: "1px solid #FE5F55",
      padding: "8px",
      color: "#FE5F55",
    },
    icon: "🚔",
  });
};
