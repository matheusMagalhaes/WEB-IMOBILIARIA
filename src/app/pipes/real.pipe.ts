import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "real",
})
export class RealPipe implements PipeTransform {
  transform(value: number | string): string {
    // Check if the value is a number
    const amount = typeof value === "number" ? value : parseFloat(value);

    // Check if the value is valid
    if (isNaN(amount)) {
      return "";
    }

    // Format the value as "real"
    const formattedAmount = amount.toFixed(2).replace(".", ",");

    // Add currency symbol
    const currency = "R$";

    return currency + " " + formattedAmount;
  }
}
