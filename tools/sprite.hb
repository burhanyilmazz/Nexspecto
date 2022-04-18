{
  // Default options
  'functions': true,
  'variableNameTransforms': ['dasherize']
}

{{#extend "scss"}}
  {{#content "sprites"}}
    {{#each sprites}}
      ${{strings.name}}: ({{px.x}}, {{px.y}}, {{px.offset_x}}, {{px.offset_y}}, {{px.width}}, {{px.height}}, {{px.total_width}}, {{px.total_height}}, '../../images/sprite/{{{escaped_image}}}', '{{name}}', );
    {{/each}}
    {{#each retina_sprites}}
      ${{strings.name_name}}: '{{name}}';
      ${{strings.name_x}}: {{px.x}};
      ${{strings.name_y}}: {{px.y}};
      ${{strings.name_offset_x}}: {{px.offset_x}};
      ${{strings.name_offset_y}}: {{px.offset_y}};
      ${{strings.name_width}}: {{px.width}};
      ${{strings.name_height}}: {{px.height}};
      ${{strings.name_total_width}}: {{px.total_width}};
      ${{strings.name_total_height}}: {{px.total_height}};
      ${{strings.name_image}}: '{{{escaped_image}}}';
      ${{strings.name}}: ({{px.x}}, {{px.y}}, {{px.offset_x}}, {{px.offset_y}}, {{px.width}}, {{px.height}}, {{px.total_width}}, {{px.total_height}}, '../../images/sprite/{{{escaped_image}}}', '{{name}}', );
    {{/each}}
  {{/content}}
  {{#content "spritesheet"}}
    ${{spritesheet_info.strings.name_sprites}}: ({{#each sprites}}${{strings.name}}, {{/each}});
    ${{spritesheet_info.strings.name}}: ({{spritesheet.px.width}}, {{spritesheet.px.height}}, '{{{spritesheet.escaped_image}}}', ${{spritesheet_info.strings.name_sprites}}, );
    ${{retina_spritesheet_info.strings.name_width}}: {{retina_spritesheet.px.width}};
    ${{retina_spritesheet_info.strings.name_height}}: {{retina_spritesheet.px.height}};
    ${{retina_spritesheet_info.strings.name_image}}: '{{{retina_spritesheet.escaped_image}}}';
    ${{retina_spritesheet_info.strings.name_sprites}}: ({{#each retina_sprites}}${{strings.name}}, {{/each}});
    ${{retina_spritesheet_info.strings.name}}: ({{retina_spritesheet.px.width}}, {{retina_spritesheet.px.height}}, '{{{retina_spritesheet.escaped_image}}}', ${{retina_spritesheet_info.strings.name_sprites}}, );

    {{#each retina_groups}}
        ${{strings.name_group_name}}: '{{name}}';
        ${{strings.name_group}}: ('{{name}}', ${{normal.strings.name}}, ${{retina.strings.name}}, );
    {{/each}}
    ${{retina_groups_info.strings.name}}: ({{#each retina_groups}}${{strings.name_group}}, {{/each}});
  {{/content}}
  {{#content "sprite-functions" mode="append"}}
    {{#if options.functions}}
      @mixin sprite-background-size($sprite) {
        $sprite-total-width: nth($sprite, 7);
        $sprite-total-height: nth($sprite, 8);
        background-size: $sprite-total-width $sprite-total-height;
      }

      @mixin retina-sprite($retina-group) {
        $normal-sprite: nth($retina-group, 2);
        $retina-sprite: nth($retina-group, 3);
        @include sprite($normal-sprite);

        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
          @include sprite-image($retina-sprite);
          @include sprite-background-size($normal-sprite);
        }
      }
    {{/if}}
  {{/content}}
  {{#content "spritesheet-functions" mode="append"}}
    {{#if options.functions}}
      @mixin retina-sprites($retina-groups) {
        @each $retina-group in $retina-groups {
          $sprite-name: nth($retina-group, 1);
          .#{$sprite-name} {
            @include retina-sprite($retina-group);
          }
        }
      }
    {{/if}}
  {{/content}}
{{/extend}}
