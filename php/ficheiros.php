<?php

function uploadFile($file, $nomeFicheiro = null, $nomePasta = null, $tamUpload = null, $arrFilesAuth = null)
{
    $tamUpload = $tamUpload == null ? 1048576 * 3 : $tamUpload;
    $arrFilesAuth = $arrFilesAuth == null ? array('image/jpeg', 'image/png', 'image/gif') : $arrFilesAuth;
    $nomeFicheiro = $nomeFicheiro == null ? uniqid('foto_') . '.jpg' : $nomeFicheiro;
    $nomePasta = $nomePasta == null ? '../upload' : $nomePasta;

    if ($file['error'] == 0) {
        if ($file['size'] <= $tamUpload) {
            if (in_array($file['type'], $arrFilesAuth)) {
                //$nomeFicheiro = $file['name'];
                //$nomePasta = 'upload';
                move_uploaded_file($file['tmp_name'], $nomePasta . '/' . $nomeFicheiro);
            }
        }
    }
    return  $nomeFicheiro;
}