# Diary
Test app for unit-org.ru

Для запуска изменить данные в persistence.xml

Для создания новой записи нажать Clear для очистки полей и вводить новые данные, тогда Save сохранит новую запись.

Возможная ошибка с jboss-logging из-за hibernate 5.1, в glassfishe, как я понял устаревшая библиотека.
Заменил библиотеку в glassfish\modules на jboss-logging-3.3.0.Final
