<script setup>
import MainHeader from '../../../components/MainHeader.vue'
import ButtonEdit from '../../../components/buttons/ButtonEdit.vue'
import ButtonAdd from '../../../components/buttons/ButtonAdd.vue'
import ButtonDelete from '../../../components/buttons/ButtonDelete.vue'
import ButtonDisable from '../../../components/buttons/ButtonDisable.vue'
import SearchInput from '../../../components/SearchInput.vue'
</script>
<template>
  <div>
    <MainHeader
      :title="$t('mainHeader.users.title')"
      :description="$t('mainHeader.users.description')"
    />
    <SearchInput v-model="searchQuery" :placeholder="$t('search.users')" />
    <ButtonAdd />
    <ButtonEdit />
    <ButtonDelete />
    <ButtonDisable />
  </div>
</template>

<style scoped></style>
