import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import "@/components/ui/date-picker.css";
import { Calendar } from 'lucide-react';

export function DatePickerInput({
  selectedDate,
  onChange,
  minDate,
  maxDate,
  placeholder,
  className = '',
  ...props
}) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="relative">
      <div className="relative z-10">
        <DatePicker
          selected={selectedDate}
          onChange={onChange}
          minDate={minDate}
          maxDate={maxDate}
          placeholderText={placeholder}
          className={`w-full h-12 px-4 pr-10 border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500 focus:outline-none rounded-lg ${className}`}
          dateFormat="MMMM d, yyyy"
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
          filterDate={(date) => date >= minDate}
          selectsStart={selectedDate === null}
          selectsEnd={selectedDate !== null}
          inline={false}
          highlightDates={[
            ...(selectedDate ? [selectedDate] : []),
            ...(minDate ? [minDate] : []),
            ...(maxDate ? [maxDate] : [])
          ]}
          renderCustomHeader={({
            date,
            changeYear,
            changeMonth,
            decreaseMonth,
            increaseMonth,
            prevMonthButtonDisabled,
            nextMonthButtonDisabled,
          }) => (
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center space-x-4">
                <button
                  onClick={decreaseMonth}
                  disabled={prevMonthButtonDisabled}
                  className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <div className="flex items-center space-x-2">
                  <select
                    value={date.getFullYear()}
                    onChange={(e) => changeYear(e.target.value)}
                    className="px-3 py-2 rounded-lg border border-gray-200 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    {Array.from({ length: 10 }, (_, i) => i + date.getFullYear() - 5).map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                  <select
                    value={date.getMonth()}
                    onChange={(e) => changeMonth(e.target.value)}
                    className="px-3 py-2 rounded-lg border border-gray-200 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    {Array.from({ length: 12 }, (_, i) => i).map((month) => (
                      <option key={month} value={month}>
                        {new Date(date.getFullYear(), month).toLocaleString('default', { month: 'long' })}
                      </option>
                    ))}
                  </select>
                </div>
                <button
                  onClick={increaseMonth}
                  disabled={nextMonthButtonDisabled}
                  className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          )}
          {...props}
          onCalendarOpen={() => setIsOpen(true)}
          onCalendarClose={() => setIsOpen(false)}
        />
        {isOpen && (
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50" onClick={() => setIsOpen(false)} />
        )}
      </div>
      <Calendar className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-amber-600" />
    </div>
  );
}
