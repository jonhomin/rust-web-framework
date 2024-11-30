import { createContext, useContext, useState, ReactNode } from "react";

interface AdminTitleContextType {
  title: string;
  setTitle: (title: string) => void;
}

const AdminTitleContext = createContext<AdminTitleContextType | undefined>(
  undefined
);

export const AdminTitleProvider = ({ children }: { children: ReactNode }) => {
  const [title, setTitle] = useState("Dashboard");

  return (
    <AdminTitleContext.Provider value={{ title, setTitle }}>
      {children}
    </AdminTitleContext.Provider>
  );
};

export const useAdminTitle = () => {
  const context = useContext(AdminTitleContext);
  if (!context) {
    throw new Error("useAdminTitle must be used within an AdminTitleProvider");
  }
  return context;
};
