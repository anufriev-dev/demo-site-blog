 # demo site blog

### Настройка

Конфигурация для настройки [.env](./.env)

### Установка docker
Если docker ну установлен, сделайте это и запустите его

Пример для Linux на основе пакетного менеджера pacman

``` sh
sudo pacman -S docker docker-compose
sudo systemctl start docker
sudo systemctl enable docker
```

### 🚀 Запуск

``` sh
sudo docker-compose up
```

или


``` sh
sudo docker-compose up -d
sudo docker-compose ps -a
```
После запуска будут доступны следующие возможности:

* [сайт](http://127.0.0.1:3000)

Проверьте запись авторизации администратора для сайта [здесь](./sql/readme.md)
