# Build stage
FROM maven:3.9.4-eclipse-temurin-17-alpine AS build
WORKDIR /app
COPY demo/pom.xml .
COPY demo/src ./src
RUN mvn clean package -DskipTests

# Production stage
FROM eclipse-temurin:17-jre-alpine AS production
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]