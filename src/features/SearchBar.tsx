import { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState("");

  return (
    <div>
      <input className="input-field" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Введите населенный пункт" />
      <button onClick={() => onSearch(query)}>Поиск</button>
    </div>
  );
};
