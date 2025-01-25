import yfinance as yf

def fetch_stock_price(stock_symbol):
    try:
        # Fetch stock data
        stock = yf.Ticker(stock_symbol)
        stock_data = stock.history(period="1d")

        if not stock_data.empty:
            current_price = stock_data['Close'].iloc[-1]
            print(f"Current price of {stock_symbol}: {current_price}")
        else:
            print("Stock data not found. Please check the symbol.")
    except Exception as e:
        print(f"Error fetching stock price: {e}")

if __name__ == "__main__":
    stock_symbol = input("Enter the stock symbol (e.g., RELIANCE.NS, TCS.NS): ").strip().upper()
    fetch_stock_price(stock_symbol)
