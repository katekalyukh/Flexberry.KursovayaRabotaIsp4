docker build --no-cache -f SQL\Dockerfile.PostgreSql -t kursovayarabotaisp4-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t kursovayarabotaisp4-java/app ../../..
