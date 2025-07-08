"use client";

import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

interface CountdownFormProps {
  onSubmit: (title: string, date: string) => void;
}

export default function CountdownForm({ onSubmit }: CountdownFormProps) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState<Date | null>(null);
  const [showCalendar, setShowCalendar] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() && date) {
      const dateString = date.toISOString().split("T")[0];
      onSubmit(title.trim(), dateString);
    }
  };

  const handleDateChange = (value: any) => {
    if (value instanceof Date) {
      setDate(value);
      setShowCalendar(false);
    }
  };

  // Get tomorrow's date as the minimum date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const formatDate = (date: Date | null) => {
    if (!date) return "";
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">
        Create Your Countdown
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Trip Name
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g., Beach Vacation, Ski Trip"
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            required
          />
        </div>

        <div className="relative">
          <label
            htmlFor="date"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Trip Date
          </label>
          <button
            type="button"
            onClick={() => setShowCalendar(!showCalendar)}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white text-left bg-white dark:bg-gray-700"
          >
            {date ? formatDate(date) : "Select a date"}
          </button>

          {showCalendar && (
            <div className="absolute z-10 mt-1 bg-white dark:bg-gray-700 rounded-lg shadow-xl border border-gray-200 dark:border-gray-600">
              <Calendar
                onChange={handleDateChange}
                minDate={tomorrow}
                value={date}
                className="rounded-lg"
                tileClassName={({ date: tileDate }) => {
                  if (date && tileDate.toDateString() === date.toDateString()) {
                    return "bg-blue-500 text-white rounded";
                  }
                  return "";
                }}
              />
            </div>
          )}
        </div>

        <button
          type="submit"
          disabled={!title.trim() || !date}
          className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          Start Countdown
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Your countdown will be saved in the URL so you can share it with
          friends!
        </p>
      </div>
    </div>
  );
}
