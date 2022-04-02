<?php

$composer_data = json_decode(file_get_contents(__DIR__ . '/../composer.json'), true);

$settings = [
    "name" => 'test',
    "slug" => "test",
    "title" => "test",
    "thumbnail" => "https://placehold.jp/300x160.png",
    "excerpt" => "test",
    "description" => "test",
    "download_link" => "",
    "author_name" => "amien",
    "author_website" => "https://vaah.dev",
    "version" => $composer_data['version'],
    "is_migratable" => false,
    "is_sample_data_available" => false,
    "db_table_prefix" => "",
    "providers" => [
        "\\VaahCms\\Modules\\Cms\\Providers\\TestServiceProvider"
    ],
    "aside-menu-order" => null
];


return $settings;
