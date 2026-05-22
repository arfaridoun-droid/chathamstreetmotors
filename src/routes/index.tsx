import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Part Worn Tyres Reading | Same Day Tyre Fitting | Chatham Street Motors RG1" },
      {
        name: "description",
        content:
          "Part worn tyres in Reading from Continental, Michelin & Pirelli. Budget new tyres, same-day tyre fitting, car diagnostics & servicing. Walk-ins welcome Mon–Sat 8:30am–6pm. 114–116 Chatham Street, Reading RG1. WhatsApp 07401 338809.",
      },
    ],
  }),
});

function Index() {
  useEffect(() => {
    window.location.replace("/site.html");
  }, []);
  return null;
}
