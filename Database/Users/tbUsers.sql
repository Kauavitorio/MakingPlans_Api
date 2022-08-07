DROP TABLE IF EXISTS ADSP010;

CREATE TABLE ADSP010 (
     nCdUser DECIMAL(10, 0) NOT NULL PRIMARY KEY,
     cNmUser VARCHAR(50)    NULL
);
GRANT SELECT,UPDATE,INSERT,DELETE ON dbo.ADSP010 TO ApiUserLogin;

INSERT INTO ADSP010 (nCdUser, cNmUser) VALUES (SELECT MAX(ADSP010.)
SELECT * FROM ADSP010