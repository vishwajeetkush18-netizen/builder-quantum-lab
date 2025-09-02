import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import MobileLayout from "./pages/mobile/MobileLayout";
import MobileHome from "./pages/mobile/Home";
import ReportForm from "./pages/mobile/ReportForm";
import WaterTest from "./pages/mobile/WaterTest";
import Notifications from "./pages/mobile/Notifications";
import Awareness from "./pages/mobile/Awareness";
import NotFound from "./pages/NotFound";
import { setupOnlineSync } from "@/lib/offline";

const queryClient = new QueryClient();

const ScrollObserver = () => {
  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("is-visible");
        else entry.target.classList.remove("is-visible");
      });
    }, observerOptions);

    const observeAll = () => {
      const elements = document.querySelectorAll(
        ".scroll-reveal, .scroll-reveal-fade, .scroll-reveal-slide-left, .scroll-reveal-slide-right, .scroll-reveal-scale",
      );
      elements.forEach((el) => observer.observe(el));
    };

    observeAll();

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setupOnlineSync("");
  }, []);

  return null;
};

const MobileRoutes = () => (
  <Routes>
    <Route element={<MobileLayout />}>
      <Route index element={<MobileHome />} />
      <Route path="report" element={<ReportForm />} />
      <Route path="water" element={<WaterTest />} />
      <Route path="notifications" element={<Notifications />} />
      <Route path="awareness" element={<Awareness />} />
    </Route>
    <Route path="*" element={<NotFound />} />
  </Routes>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollObserver />
        <MobileRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
