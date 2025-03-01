# Commands

## Windows

```
./keytool.exe -genkeypair -alias serverkey -keyalg RSA -keysize 2048 -validity 365 -keystore keystore.jks
```

```
./keytool.exe -export -alias serverkey -file server-cert.cer -keystore keystore.jks
```

```
./keytool.exe -import -trustcacerts -alias servercert -file server-cert.cer -keystore truststore.jks
```

```
./keytool.exe -list -v -keystore keystore.jks
```

```
./keytool.exe -list -v -keystore truststore.jks
```
