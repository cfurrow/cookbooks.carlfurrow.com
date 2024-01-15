---
logo: rubyonrails
---

# Request Fingerprint

Rails controller concern for basic server-side browser fingerprints to be used for rate limiting, etc.

```ruby
# frozen_string_literal: true

# @see https://gist.github.com/joeldrapper/9e92896cb339b889a6667ab6a591f613
module Fingerprinting
  def full_fingerprint
    generate_fingerprint(
      ip_fingerprint,
      browser_fingerprint
    )
  end

  def ip_fingerprint
    generate_fingerprint(
      request.remote_ip
    )
  end

  def browser_fingerprint
    generate_fingerprint(
      request.headers["HTTP_ACCEPT"],
      request.headers["HTTP_ACCEPT_ENCODING"],
      request.headers["HTTP_ACCEPT_LANGUAGE"],
      request.headers["HTTP_USER_AGENT"]
    )
  end

  def generate_fingerprint(*data)
    Digest::SHA256.hexdigest(fingerprint_pepper + data.join)
  end

  # This is added to fingerprints to make them impossible to brute force
  def fingerprint_pepper
    Rails.env.production? ? ENV.fetch("FINGERPRINT_PEPPER") : "test"
  end
end
```
