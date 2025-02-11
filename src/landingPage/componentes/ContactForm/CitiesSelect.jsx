import { useState } from "react";
import states from "../../../utils/mexico.json";

export default function citiesSelect() {
  const [selectedState, setSelectedState] = useState("Aguascalientes");

  return (
    <div className="grid grid-cols-2 gap-4 pt-4">
      <div>
        <label
          htmlFor="estado"
          className="block text-sm font-medium text-white"
        >
          Estado
        </label>
        <select
          id="estado"
          name="estado"
          className="p-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600 autofill:pt-6 autofill:pb-2"
          onChange={event => setSelectedState(event.target.value)}
        >
          {Object.keys(states).map(state => (
            <option key={state}>{state}</option>
          ))}
        </select>
      </div>
      <div>
        <label
          htmlFor="ciudad"
          className="block text-sm font-medium text-white"
        >
          Ciudad
        </label>
        <select
          id="ciudad"
          name="ciudad"
          className="p-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600 autofill:pt-6 autofill:pb-2"
        >
          {selectedState &&
            states[selectedState].map(city => (
              <option key={city}>{city}</option>
            ))}
        </select>
      </div>
    </div>
  );
}
