import re
import pdfplumber
import csv

def clean_text(text):
    # Remove everything between BUY/SELL and the word after 'at'
    text = re.sub(r'(BUY|SELL) .*? (Principal|Agency). ', r'\1 ', text)
    # Remove unwanted spaces and characters
    return re.sub(r'\s+', ' ', text).strip()

def extract_buy_sell_from_pdf(pdf_path):
    buy_sell_data = []
    current_row = []

    with pdfplumber.open(pdf_path) as pdf:
        for page in pdf.pages:
            lines = page.extract_text().splitlines()

            for line in lines:
                # Match BUY/SELL rows
                match = re.match(r'(\d{2}/\d{2}/\d{4})\s+(\d{2}/\d{2}/\d{4})\s+(USD)\s+(BUY|SELL)\s+(.+)', line)
                
                if match:
                    if current_row:
                        buy_sell_data.append(current_row)
                    current_row = [clean_text(line)]
                    print(current_row)
                elif current_row:
                    # Handle multi-line merging
                    current_row[-1] += " " + clean_text(line)

    # Add the last row
    if current_row:
        buy_sell_data.append(current_row)

    return buy_sell_data

# Path to PDF file
pdf_path = 'activity.pdf'

# Extract data
buy_sell_entries = extract_buy_sell_from_pdf(pdf_path)

# Save to CSV
with open('buy_sell_activity.csv', 'w') as csv_file:
    csv_writer = csv.writer(csv_file)
    csv_writer.writerow(["Trade Date", "Settle Date", "Currency", "Activity Type", "Symbol", "Quantity", "Price", "Amount"])
    
    for entry in buy_sell_entries:
        csv_writer.writerow(entry[0].split())


print("✅ Successfully Extracted BUY & SELL Activities!")
