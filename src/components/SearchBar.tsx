type SearchBarProps = {
  value?: string;
  setValue: (arg: string) => void;
};

export default function SearchBar({ value, setValue }: SearchBarProps) {
  return (
    <div>
      <input
        id="search"
        type="text"
        placeholder="Enter Character Name"
        className="flex border-2"
        value={value}
        onChange={(event) => {
          event.preventDefault();
          setValue(event.target.value);
        }}
      />
    </div>
  );
}
