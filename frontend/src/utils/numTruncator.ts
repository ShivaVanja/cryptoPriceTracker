export const numTruncator = (n: number): string => {
    const units = [
      { value: 1_000_000_000_000, suffix: "T" },
      { value: 1_000_000_000, suffix: "B" },
      { value: 1_000_000, suffix: "M" },
      { value: 1_000, suffix: "K" }
    ];
  
    // Loop through units to check for large numbers
    for (const unit of units) {
      if (n >= unit.value) {
        return (n / unit.value).toFixed(2) + unit.suffix;
      }
    }
  
    // For smaller numbers, return up to two decimal places
    return n.toFixed(2);
  };
  