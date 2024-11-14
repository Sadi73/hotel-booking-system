import RootPage from "@/components/RootPage";
import AuthProvider from "./Providers/AuthProvider";

export default function Home() {
  return (
    <div className="font-serif">
      <AuthProvider>
        <RootPage />
      </AuthProvider>
    </div>
  );
}
