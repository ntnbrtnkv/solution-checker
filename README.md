# Суть

Этот репозиторий содержит код для проверки задания на Node.js, который при сборке оборачивается в Docker контейнер и подключается в целевом репозитории студента

Код тестов находится в `/src`

Пример подключения в содержится в папке `/test`, а так же тут https://gitlab.com/ntnbrtnkv/xsf2021-test

## Скрипты в `/package.json`

:warning: Чтоб при локальном запуске тесты находили файл с кодом решения надо объявить переменную `CI_PROJECT_DIR` с путем до папки с файлом `code.js`, например для WINDOWS: `set CI_PROJECT_DIR=./test`

:warning: Обновите названия для Docker образов `ntnbrtnkv/xfsgasfsfssfaahasfhgfsd20asfg21-test` на свои, к которым есть доступ на пуш в Docker Hub в `./package.json` и `./test/.gitlab-ci.yml`

`npm run unit` - запускает тесты на локальном файле с решениями

`npm run build` - делает production версию кода тестов с обфускацией

`npm run docker:build` - собирает Docker образ production версии

`npm run docker:push` - пушит Docker на Docker Hub

`npm run docker` - сборка кода, создание образа и пуш