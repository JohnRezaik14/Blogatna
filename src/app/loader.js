"use client";
import { useEffect, useState } from "react";
import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <div className="text-center p-4">
      <CircularProgress disableShrink />
    </div>
  ) : null;
}
