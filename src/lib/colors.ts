export const getColorClass = (color: string | undefined): string => {
    const colorMap: { [key: string]: string } = {
      'Cloudy White': 'bg-gray-50',
      'Blue': 'bg-blue-50',
      // Add more color mappings as needed
    };
  
    return colorMap[color || ''] || 'bg-white';
  };