import hashlib
import hmac
import time

# BunnyCDN details
cdn_url = "https://test-bucket-demo.b-cdn.net"
file_path = "/test.mp4"  # File path in CDN
security_key = "bf35d788-145f-4117-a0c1-47bc11c7455c"  # Get from BunnyCDN dashboard

# Expiry time (1 hour from now)
expiry_time = int(time.time()) + 3600

# Create string to hash
string_to_hash = f"{file_path}{expiry_time}"

# Generate HMAC SHA256 hash
signature = hmac.new(security_key.encode(), string_to_hash.encode(), hashlib.sha256).hexdigest()

# Construct signed URL
signed_url = f"{cdn_url}{file_path}?token={signature}&expires={expiry_time}"

print("Signed URL:", signed_url)
