import { useState, useEffect } from "react";
import Papa from "papaparse";
import normaliseTr from "../utils/normaliseTr";
import vpdCsv from "../data/vpd_predictions.csv?url";

export default function useCityData() {
  const [cityData, setCityData] = useState([]);

  useEffect(() => {
    Papa.parse(vpdCsv, {
      download: true,
      header: true,
      complete: ({ data }) => {
        const parsed = data.map((row) => {
          const scale = (v) => (+v) * 10;
        
          return {
            ...row,
            Year1: scale(row.Year1),
            Year2: scale(row.Year2),
            Year3: scale(row.Year3),
            Year4: scale(row.Year4),
            Year5: scale(row.Year5),
            key: normaliseTr(row.city),
          };
        });        
        setCityData(parsed);
      },
    });
  }, []);

  return cityData;
}
