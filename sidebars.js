module.exports = {
  tutorialSidebar:[
    "intro",
    {
      type: 'category',
      label: 'Nutanix IPI Installation',
      items: ['ocp_ipi_install/ocp_ipi_intro',
              'ocp_ipi_install/ocp_ipi_pre_reqs',
              'ocp_ipi_install/ocp_ipi_config_file',
              'ocp_ipi_install/ocp_ipi_install_cleanup'],
    },
    {
      type: 'category',
      label: 'Nutanix Storage CSI',
      items: ['ocp_ntnx_hci/ocp_csi',
              'optional_labs/ocp_image_registry'],
    },
    "ocp_ndb/ocp_ndb",
    {
      type: 'category',
      label: 'OCP Workload Backup and Restore',
      items: ['optional_labs/objects_prep'],
    },
    // {
    //   type: 'category',
    //   label: 'OCP Workload Backup/Restore',
    //   items: ['optional_labs/objects_prep','workloads_on_ocp/ocp_k10','workloads_on_ocp/ocp_wordpress_deploy','workloads_on_ocp/ocp_k10_backup_restore'],
    // },
    {
      type: 'category',
      label: 'OCP with Nutanix Cloud Manager (NCM)',
      items: ['ocp_ntnx_hci/import_bp',
              'ocp_ntnx_hci/prov_vm',
              'ocp_ntnx_hci/ocp_vms',
              'ocp_ntnx_hci/ocp_scale_out_in'],
    },
    "ocp_assisted_install/ocp_assisted_install",
    {
      type: 'category',
      label: 'OCP Optional Labs',
      items: ['optional_labs/ocp_vms_2',
              'optional_labs/ocp_idp'],
    },
    // {
    //   type: 'category',
    //   label: 'Multi-region Workloads',
    //   items: ['ocp_topology/ocp_topology','ocp_topology/infra_topology','ocp_topology/ocp_setup','ocp_topology/multiaz_app1','ocp_topology/multiaz_app2'],
    // },
    {
      type: 'category',
      label: 'Tools VMs',
      items: ['toolsvms/linux_tools_vm','toolsvms/windows_tools_vm'],
    },
  ],
};